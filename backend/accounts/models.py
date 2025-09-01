from django.contrib.auth.models import AbstractUser
from django.db import models


class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)

    def __str__(self) -> str:  # pragma: no cover - simple repr
        return self.name


class User(AbstractUser):
    roles = models.ManyToManyField(Role, through="UserRole", related_name="users")


class UserRole(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("user", "role")

    def __str__(self) -> str:  # pragma: no cover
        return f"{self.user.username} -> {self.role.name}"

