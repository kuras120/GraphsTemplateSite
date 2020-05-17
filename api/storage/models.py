from django.db import models
# Create your models here.


class Graph(models.Model):
    name = models.CharField(max_length=32)
    sub_name = models.CharField(max_length=32)
    description = models.CharField(max_length=64)
    type = models.CharField(max_length=16)
    x_label = models.CharField(max_length=16)
    y_label = models.CharField(max_length=16)
    creation_date = models.DateTimeField()

    def __str__(self):
        return str(self.name) + ' - ' + str(self.sub_name)


class Data(models.Model):
    key = models.FloatField()
    value = models.FloatField()
    graph = models.ForeignKey(Graph, related_name='data', on_delete=models.CASCADE)

    def __str__(self):
        return '(' + str(self.key) + ',' + str(self.value) + ')'

    class Meta:
        verbose_name_plural = 'Data'
