import requests
from google.cloud import firestore

db = firestore.Client()
users_ref = db.collection(u'colors')

def endpoint(request):
    return "Hello World!"

def colors(request):
    return str([x for x in users_ref.get()])

