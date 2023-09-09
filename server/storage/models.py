import math
from django.db import models
from django.utils import timezone

# Create your models here.
from typing import List


class Type(models.TextChoices):
    LINE = 'Line'
    POLAR = 'Polar'
    AREA = 'Area'


class Graph(models.Model):
    name = models.CharField(max_length=32)
    sub_name = models.CharField(max_length=32)
    description = models.CharField(max_length=64)
    type = models.CharField(max_length=16, choices=Type.choices, default=Type.LINE)
    x_label = models.CharField(max_length=16)
    y_label = models.CharField(max_length=16)
    creation_date = models.DateTimeField(default=timezone.now)

    objects = models.Manager()


class Data(models.Model):
    key = models.FloatField()
    value = models.FloatField()
    graph = models.ForeignKey(Graph, related_name='data', on_delete=models.CASCADE)

    objects = models.Manager()

    class Meta:
        verbose_name_plural = 'Data'


class StatisticsManager(models.Manager):
    def create_statistics(self, data, g_id):
        stats = Statistics.generate_stats(data)
        return self.create(a_mean=stats[0], w_mean=stats[1], median=stats[2], dominant=stats[3],
                           std_deviation=stats[4], highest=stats[5], lowest=stats[6], graph_id=g_id)

    def update_statistics(self, data):
        stats = Statistics.generate_stats(data)
        return self.update(a_mean=stats[0], w_mean=stats[1], median=stats[2], dominant=stats[3],
                           std_deviation=stats[4], highest=stats[5], lowest=stats[6])


class Statistics(models.Model):
    a_mean = models.FloatField(null=True)
    w_mean = models.FloatField(null=True)
    median = models.FloatField(null=True)
    dominant = models.FloatField(null=True)
    std_deviation = models.FloatField(null=True)
    highest = models.FloatField(null=True)
    lowest = models.FloatField(null=True)
    graph = models.OneToOneField(Graph, related_name='statistics', on_delete=models.CASCADE, null=True)

    objects = StatisticsManager()

    @staticmethod
    def generate_stats(data):
        if len(data) > 0:
            data.sort(key=lambda x: x['value'])
            a_mean_divide, w_mean_divide = len(data), sum(x['key'] for x in data)
            if a_mean_divide != 0:
                a_mean = sum(x['value'] for x in data) / a_mean_divide
                std_deviation = math.sqrt(sum(pow(x['value'] - a_mean, 2) for x in data) / len(data))
            else:
                a_mean, std_deviation = None, None
            if w_mean_divide != 0:
                w_mean = sum(x['key'] * x['value'] for x in data) / w_mean_divide
            else:
                w_mean = None
            median = Statistics.__calculate_median(data)
            dominant = Statistics.__calculate_dominant(data)
            highest = data[-1]['value']
            lowest = data[0]['value']
            return a_mean, w_mean, median, dominant[0], std_deviation, highest, lowest
        return None, None, None, None, None, None, None

    @staticmethod
    def __calculate_median(data):
        if len(data) % 2 != 0:
            median = data[int(len(data) / 2)]['value']
        else:
            median = (data[int(len(data) / 2) - 1]['value'] + data[int(len(data) / 2)]['value']) / 2
        return median

    @staticmethod
    def __calculate_dominant(data):
        x = None
        count = 0
        for obj in data:
            if count == 0:
                x = obj['value']
                count += 1
            elif obj['value'] == x:
                count += 1
            else:
                count -= 1
        return x, count

    class Meta:
        verbose_name_plural = 'Statistics'
