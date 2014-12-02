from django.shortcuts import render, render_to_response, redirect
from games.forms import EmailUserCreationForm


def index(request):
    return render_to_response("index.html")


def snake(request):
    return render(request, "snake.html")


def pokemon(request):
    return render(request, "pokemon.html")


def paint(request):
    return render(request, "paint.html")

def register(request):
    if request.method == "POST":
        form = EmailUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect("login")
    else:
        form = EmailUserCreationForm()
    return render(request, "registration/register.html", {'form': form})

def profile(request):
    current_user = request.user
    # if not current_user.exists():
    #     current_user.create(name='name', user='user',)

    #games = current_user.games.name.get()
    # scores = current_user.game.score.get()
    # data = {'games': games, 'scores': scores}
    return render(request, 'profile.html', locals())

