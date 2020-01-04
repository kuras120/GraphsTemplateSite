from django.db import models
# Create your models here.


class Graph(models.Model):
    graph_name = models.CharField(max_length=32, unique=True)
    type = models.CharField(max_length=16)

    def __str__(self):
        return self.graph_name


class Data(models.Model):
    key = models.FloatField()
    value = models.FloatField()
    description = models.CharField(max_length=64, null=False)
    graph = models.ForeignKey(Graph, related_name='data', on_delete=models.CASCADE)

    def __str__(self):
        return '(' + str(self.key) + ',' + str(self.value) + ')'

    class Meta:
        verbose_name_plural = 'Data'
