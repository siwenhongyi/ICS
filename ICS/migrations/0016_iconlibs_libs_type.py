# Generated by Django 3.2 on 2021-05-04 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ICS', '0015_auto_20210504_1224'),
    ]

    operations = [
        migrations.AddField(
            model_name='iconlibs',
            name='libs_type',
            field=models.CharField(default='icon', max_length=100),
        ),
    ]