# Generated by Django 2.2.5 on 2019-11-17 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='graph',
            name='graph_name',
            field=models.CharField(max_length=32, unique=True),
        ),
    ]