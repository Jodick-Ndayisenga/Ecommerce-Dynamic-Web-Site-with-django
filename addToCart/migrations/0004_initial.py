# Generated by Django 4.1 on 2022-11-07 20:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('addToCart', '0003_remove_picinfo_item_remove_users_orders_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60)),
                ('preview', models.ImageField(upload_to='static/images')),
                ('comments', models.CharField(max_length=360)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=60)),
                ('seconName', models.CharField(max_length=60)),
                ('Email', models.CharField(blank=True, max_length=60, null=True)),
                ('phone', models.IntegerField(blank=True)),
                ('address', models.CharField(max_length=100)),
                ('orders', models.ManyToManyField(blank=True, related_name='items', to='addToCart.orders')),
            ],
        ),
        migrations.CreateModel(
            name='Picinfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('des_sizes', models.TextField(max_length=360)),
                ('captured_time', models.DateField()),
                ('price', models.IntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='addToCart.picture')),
            ],
        ),
        migrations.AddField(
            model_name='orders',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='addToCart.picinfo'),
        ),
    ]
