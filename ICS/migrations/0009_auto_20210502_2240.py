# Generated by Django 3.2 on 2021-05-02 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ICS', '0008_auto_20210502_2225'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='height',
            field=models.IntegerField(blank=True, default=1024, null=True),
        ),
        migrations.AlterField(
            model_name='data',
            name='width',
            field=models.IntegerField(blank=True, default=1024, null=True),
        ),
    ]
