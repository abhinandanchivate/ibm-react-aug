from django.db import migrations


def create_roles(apps, schema_editor):
    Role = apps.get_model('accounts', 'Role')
    for name in ["Admin", "Doctor", "Nurse", "Staff"]:
        Role.objects.get_or_create(name=name)


class Migration(migrations.Migration):
    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_roles),
    ]
