from django.urls import path, include
from . import views
from .views import UserCreateView, SignInView

urlpatterns = [
    path('signup/', UserCreateView.as_view(), name='user-signup'),
    path('signin/', SignInView.as_view(), name='user-signin'),
]