import requests
from google.cloud import firestore

db = firestore.Client()
colors_ref = db.collection(u'colors')

colors = colors_ref.get()

def endpoint(request):
    return "Hello World!"

def getcolors(request):

    return ", ".join(["{} => {}".format(x.id, x.to_dict()) for x in colors])

