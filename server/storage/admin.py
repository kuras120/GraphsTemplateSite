from django.contrib import admin
from storage.models import Graph, Data, Statistics
from django.utils.crypto import get_random_string
from django.contrib.auth.hashers import make_password

# Register your models here.


class GraphAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'sub_name', 'description', 'type', 'x_label', 'y_label', 'creation_date']
    search_fields = ['name']
    list_filter = ['type']
    ordering = ['id', 'creation_date']


class DataAdmin(admin.ModelAdmin):
    list_display = ['id', 'key', 'value', 'get_graph']
    search_fields = ['graph__name']
    list_filter = ['graph__type']
    ordering = ['id']

    def get_graph(self, obj):
        return obj.graph.name

    get_graph.short_description = 'Graph'
    get_graph.admin_order_field = 'graph__id'


class StatisticsAdmin(admin.ModelAdmin):
    list_display = ('a_mean', 'w_mean', 'median', 'dominant',
                    'std_deviation', 'highest', 'lowest', 'graph')
    search_fields = ['graph__name']
    list_filter = ['graph__type']
    ordering = ['id']


admin.site.register(Graph, GraphAdmin)
admin.site.register(Data, DataAdmin)
admin.site.register(Statistics, StatisticsAdmin)
