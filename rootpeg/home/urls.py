from django.urls import path
from .views import home, addQuotation, addQuery

urlpatterns = [
    path('', home, name="home"),
    path('addQuotation', addQuotation, name="quotation"),
    path('addQuery', addQuery, name="query"),
]
