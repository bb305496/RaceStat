from django.urls import path
from pricelist import views

urlpatterns = [
    path('pricelist/', views.get_pricelist),
    path('add_car/', views.add_car),
]