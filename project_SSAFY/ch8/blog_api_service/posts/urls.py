from django.urls import path, include
from . import views

urlpatterns = [
    path('postlist/', views.postlist),
    path('postlist/<int:post_pk>/', views.postdetail),
    path('catelist/', views.catelist),
    path('postlist/<int:post_pk>/comment/', views.comment_create),
]
