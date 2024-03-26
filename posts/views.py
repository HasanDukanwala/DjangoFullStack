from django.shortcuts import render
from .models import Post
from django.http import JsonResponse

# Create your views here.

def post_list_and_create(request):
    qs = Post.objects.all()
    return render(request, 'posts/main.html',{'qs':qs})


def hello_worls_view(request):
    return JsonResponse({'text': 'Hello World'})