from django import forms
from .models import Quotation, Query


class EstimateForm(forms.ModelForm):
    class Meta:
        model = Quotation

        fields = {
            'name',
            'number',
            'email',
            'description',

        }

        widgets = {
            'name': forms.TextInput(attrs={
                'class': "form-control inp",
                'placeholder': 'Client name'

            }),

            'number': forms.NumberInput(attrs={
                'class': "form-control inp",
                'placeholder': 'Client phone number'

            }),

            'email': forms.EmailInput(attrs={
                'class': "form-control inp",
                'placeholder': 'Client email'

            }),

            'description': forms.Textarea(attrs={
                'content': 'Textarea',
                'class': "form-control inp",
                'placeholder': 'Brief description work to be done'

            })
        }


class QueryForm(forms.ModelForm):
    class Meta:
        model = Query

        fields = {
            'name',
            'email',
            'question',

        }

        widgets = {
            'name': forms.TextInput(attrs={
                'class': "form-control inp",
                'placeholder': 'Your Name'

            }),


            'email': forms.EmailInput(attrs={
                'class': "form-control inp",
                'placeholder': 'Your Email *'

            }),

            'question': forms.Textarea(attrs={
                'content': 'Textarea',
                'class': "form-control inp",
                'placeholder': 'Your question/comment'

            })
        }
