from django.shortcuts import render
#from django.http import HttpResponse



from .models import *

# Create your views here.
def index(request):
    #return HttpResponse(f'Hello there')
    return render (request, 'index.html', {
        'image': Picture.objects.all()
    } )

def iteminfo(request, id_pic):
    imag = Picture.objects.get(pk=id_pic)
    picture = Picinfo.objects.get(item=imag)
    return render(request, 'iteminfo.html', {
        'info':picture
    })