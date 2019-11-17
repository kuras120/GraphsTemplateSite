from django.contrib import admin
from data.models import Graph, Storage
from django.utils.crypto import get_random_string
from django.contrib.auth.hashers import make_password

# Register your models here.


class GraphAdmin(admin.ModelAdmin):
    list_display = ['id', 'graph_name', 'type']
    search_fields = ['graph_name']
    list_filter = ['type']
    ordering = ['id']


class StorageAdmin(admin.ModelAdmin):
    list_display = ['id', 'key', 'value', 'description', 'get_graph']
    search_fields = ['graph__graph_name']
    list_filter = ['graph__type']
    ordering = ['id']

    def get_graph(self, obj):
        return obj.graph.graph_name

    get_graph.short_description = 'Graph'
    get_graph.admin_order_field = 'graph__id'


admin.site.register(Graph, GraphAdmin)
admin.site.register(Storage, StorageAdmin)
