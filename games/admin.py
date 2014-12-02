from django.contrib import admin

# Register your models here.
from games.models import Player, Game


class PlayerAdmin(admin.ModelAdmin):

	list_display = ('name','games',)

admin.site.register(Player, PlayerAdmin)



class GameAdmin(admin.ModelAdmin):

	list_display = ('name','score','player',)

admin.site.register(Game, GameAdmin)



