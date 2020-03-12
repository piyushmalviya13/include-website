from django.db import models
import datetime

# Create your models here.

class employees(models.Model):
	firstname = models.CharField(max_length=20)
	lastname = models.CharField(max_length=20)
	exp_id = models.IntegerField()

	def __str__(self):
		return self.firstname

class Event(models.Model):
	name = models.CharField(max_length=50)
	description = models.CharField(max_length=1000)
	registrationLink = models.CharField(max_length=200)
	isRegistrationActive = models.BooleanField()
	registrationStartDateTime = models.DateTimeField(null=True)
	registrationEndDateTime = models.DateTimeField(null=True)
	eventPageLink = models.CharField(max_length=200)
	eventDate = models.DateField(default = datetime.datetime.now())
	isDeleted = models.BooleanField(default = False)
	creationDate = models.DateField(default = datetime.datetime.now())
	lastUpdationDate = models.DateField(default = datetime.datetime.now())

	#eventPoster = models.BinaryField()
	#eventPoster = models.ImageField()

class LoginCredential(models.Model):
	username = models.CharField(max_length=20)
	password = models.CharField(max_length=20)

DESIGNATIONS = (
            ('C','Coordinator'),
            ('S','Senior Coordinator'),
            ('P','President'),
            ('T','Technical Lead'),
            )

class Member(models.Model):
	name = models.CharField(max_length=50)
	passingYear = models.BigIntegerField()
	designation = models.CharField(choices=DESIGNATIONS, max_length=1)
	linkedinUrl = models.CharField(max_length=100)
	githubUrl = models.CharField(max_length=100)