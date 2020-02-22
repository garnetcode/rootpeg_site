from django.db import models

# Create your models here.


class Quotation(models.Model):
    name = models.CharField(max_length=100)
    number = models.IntegerField()
    email = models.EmailField(max_length=100)
    description = models.TextField(500)

    def __str__(self):
        return self.name


class Query(models.Model):
    name = name = models.CharField(max_length=30)
    email = models.EmailField()
    question = models.TextField()

    def __str__(self):
        return self.name




