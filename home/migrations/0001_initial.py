# Generated by Django 4.1.4 on 2023-05-07 22:46

from django.db import migrations, models
import django.db.models.deletion
import home.blocks
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0078_referenceindex'),
    ]

    operations = [
        migrations.CreateModel(
            name='BannerPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('banner', wagtail.fields.StreamField([('BannerImage', wagtail.blocks.StructBlock([('image', home.blocks.ImageChooserBlocks())]))], blank=True, null=True, use_json_field=True)),
            ],
            options={
                'verbose_name': 'banner',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='HomePage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('trending_products', wagtail.fields.StreamField([('Products', wagtail.blocks.StructBlock([('product', home.blocks.PageChooserBlocks(page_type=['products.Product']))]))], blank=True, null=True, use_json_field=True)),
            ],
            options={
                'verbose_name': 'home',
            },
            bases=('wagtailcore.page',),
        ),
    ]
