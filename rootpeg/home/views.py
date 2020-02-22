from django.shortcuts import render, redirect
from .forms import EstimateForm, QueryForm
from .models import Quotation, Query
from django.contrib import messages


def home(request):
    context = {
        'modalform': EstimateForm,
        'queryform': QueryForm
    }

    return render(request, "home.html", context)


def addQuotation(request):
    form = EstimateForm(request.POST)

    if form.is_valid():
        myreg = Quotation(name=form.cleaned_data['name'],
                          number=form.cleaned_data['number'],
                          email=form.cleaned_data['email'],
                          description=form.cleaned_data['description'])
        myreg.save(Quotation)
        messages.add_message(request, messages.SUCCESS, "Your quotation request has been submitted")

    return redirect('home')


def addQuery(request):
    form = QueryForm(request.POST)

    if form.is_valid():
        form.save(Query)

    return redirect('home')

# Create your views here.
