# Generated by Django 3.2 on 2021-05-07 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ICS', '0016_iconlibs_libs_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='data',
            name='path_attributes',
            field=models.TextField(blank=True, null=True),
        ),
    ]
