# Generated by Django 3.0.2 on 2020-01-16 23:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0002_auto_20200104_1417'),
    ]

    operations = [
        migrations.RenameField(
            model_name='graph',
            old_name='graph_name',
            new_name='name',
        ),
    ]
