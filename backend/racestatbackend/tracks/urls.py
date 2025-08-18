from django.urls import path
from tracks import views

urlpatterns = [
    path('tracks/', views.get_tracks),
    path('add_track/', views.add_track),
]

