from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import User
from django.http import Http404

from restapp.serializers import EmployeesSerializer
from restapp.serializers import EventSerializer
from restapp.serializers import LoginCredentialSerializer
from restapp.serializers import MemberSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . models import employees
from . models import Event
from . models import LoginCredential
from . models import Member


class EmployeeList(APIView):
	def get(self, request):
		employees1 = employees.objects.all()
		serializer = EmployeesSerializer(employees1, many=True)
		return Response(serializer.data)

	def post(self):
		pass

class EventList(APIView):
	def get(self, request):
		event1 = Event.objects.all()
		serializer = EventSerializer(event1, many=True)
		return Response(serializer.data)

	def post(self, request):
		serializer = EventSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def put(self, request):
		try:
			event = Event.objects.get(pk=request.data['id'])
		except Event.DoesNotExist:
			return Response(status=status.HTTP_404_NOT_FOUND)

		serializer = EventSerializer(event, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request):
		try:
			event = Event.objects.get(pk=request.data['id'])
			event.delete()
		except BaseException as be:
			return Response(be)
		#return Response(status=status.HTTP_204_NO_CONTENT)

class LoginCredentialList(APIView):
	# def get(self, request):
	# 	employees1 = employees.objects.all()
	# 	serializer = EmployeesSerializer(employees1, many=True)
	# 	return Response(serializer.data)

	def post(self):
		pass

class MemberList(APIView):
	def get(self, request):
		member1 = Member.objects.all()
		serializer = MemberSerializer(member1, many=True)
		return Response(serializer.data)

	def post(self):
		pass