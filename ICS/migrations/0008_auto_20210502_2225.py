# Generated by Django 3.2 on 2021-05-02 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ICS', '0007_alter_data_data_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='data_type',
            field=models.CharField(default='icon', max_length=500),
        ),
        migrations.AlterField(
            model_name='data',
            name='font_class',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='data',
            name='name',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='data',
            name='slug',
            field=models.SlugField(max_length=500),
        ),
        migrations.AlterField(
            model_name='iconlibs',
            name='name',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='iconlibs',
            name='slugs',
            field=models.SlugField(max_length=500),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='nickname',
            field=models.CharField(max_length=200),
        ),
    ]
