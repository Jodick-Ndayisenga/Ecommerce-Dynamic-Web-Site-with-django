from django.db import models

# Create your models here.


class Picture(models.Model):
    title = models.CharField(max_length=60, blank=False)
    preview = models.ImageField(
        upload_to=f'static/images', null=False, blank=False)
    comments = models.CharField(max_length=360)

    def __str__(self):
        return f'{self.title}'


class Picinfo(models.Model):
    item = models.ForeignKey(
        Picture, on_delete=models.CASCADE, blank=False, null=False)
    description_sizes = models.TextField(
        blank=False, name='des_sizes', max_length=360)
    captured_time = models.DateField(blank=False)
    price = models.IntegerField(blank=False)

    def __str__(self):
        return f'{self.item}'


class Orders(models.Model):
    order = models.ForeignKey(
        Picinfo, on_delete=models.CASCADE, blank=False, null=False)
    #person = models.ForeignKey(Users, on_delete=models.CASCADE, blank=False, null=False)


class Users(models.Model):
    firstName = models.CharField(max_length=60, blank=False)
    seconName = models.CharField(max_length=60, blank=False)
    profile_picture: models.ImageField(null=True, blank=True)
    Email = models.CharField(max_length=60, null=True, blank=True)
    phone = models.IntegerField(blank=True)
    address = models.CharField(max_length=100)

    orders = models.ManyToManyField(Orders, blank=True, related_name='items')

    def __str__(self):
        return f'{self.firstName}  {self.seconName}'
