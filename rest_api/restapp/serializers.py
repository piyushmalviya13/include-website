from django.contrib.auth.models import User

from rest_framework import serializers
from . models import employees, Event, LoginCredential, Member

class EmployeesSerializer(serializers.ModelSerializer):
	class Meta:
		model = employees
		#fields = ('id', 'username', 'first_name', 'last_name', 'email')
		fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Event
		#fields = ('id', 'username', 'first_name', 'last_name', 'email')
		fields = '__all__'

class LoginCredentialSerializer(serializers.ModelSerializer):
	class Meta:
		model = LoginCredential
		#fields = ('id', 'username', 'first_name', 'last_name', 'email')
		fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
	class Meta:
		model = Member
		#fields = ('id', 'username', 'first_name', 'last_name', 'email')
		fields = '__all__'