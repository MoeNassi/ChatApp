# Generated by Django 4.2.11 on 2024-04-26 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mine', models.CharField(max_length=255)),
                ('others', models.CharField(max_length=255)),
            ],
        ),
    ]
