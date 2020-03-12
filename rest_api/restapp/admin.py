from django.contrib import admin

from . models import employees, Event, Member, LoginCredential
# Register your models here.
admin.site.register(employees)

admin.site.register(Event)
admin.site.register(Member)
admin.site.register(LoginCredential)
