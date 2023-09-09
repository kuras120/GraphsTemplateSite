# Generated by Django 3.1.4 on 2021-01-09 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='graph',
            name='type',
            field=models.CharField(choices=[('Line', 'Line'), ('Polar', 'Polar'), ('Area', 'Area')], default='Line', max_length=16),
        ),
    ]