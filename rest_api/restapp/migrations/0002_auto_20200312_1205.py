# Generated by Django 3.0.4 on 2020-03-12 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=1000)),
                ('registrationLink', models.CharField(max_length=200)),
                ('isRegistrationActive', models.BooleanField()),
                ('eventPageLink', models.CharField(max_length=200)),
                ('eventPoster', models.BinaryField()),
            ],
        ),
        migrations.CreateModel(
            name='LoginCredentials',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('passingYear', models.BigIntegerField()),
                ('designation', models.CharField(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ('P', 'Portion')], max_length=1)),
                ('linkedinUrl', models.CharField(max_length=100)),
                ('githubUrl', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name='employees',
            name='firstname',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='employees',
            name='lastname',
            field=models.CharField(max_length=20),
        ),
    ]
