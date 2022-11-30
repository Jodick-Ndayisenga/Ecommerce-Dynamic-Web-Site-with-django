from django.contrib import admin

# Register your models here.


from .models import *

admin.site.register(Users)
admin.site.register(Picture)
admin.site.register(Picinfo)
admin.site.register(Orders)
