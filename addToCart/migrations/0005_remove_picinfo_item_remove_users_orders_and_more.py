# Generated by Django 4.1 on 2022-11-25 14:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('addToCart', '0004_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='picinfo',
            name='item',
        ),
        migrations.RemoveField(
            model_name='users',
            name='orders',
        ),
        migrations.DeleteModel(
            name='Orders',
        ),
        migrations.DeleteModel(
            name='Picinfo',
        ),
        migrations.DeleteModel(
            name='Picture',
        ),
        migrations.DeleteModel(
            name='Users',
        ),
    ]
