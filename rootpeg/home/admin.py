from django.contrib import admin
from .models import Quotation, Query

# Register your models here.
admin.site.register(Quotation)
admin.site.register(Query)
