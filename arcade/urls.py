from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'games.views.index', name='index'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^snake/$', 'games.views.snake', name='snake'),
    url(r'^pokemon/$', 'games.views.pokemon', name='pokemon'),
    url(r'^paint/$', 'games.views.paint', name='paint'),
    url(r'^register/$', 'games.views.register', name='register'),
    url(r'^login/$', 'django.contrib.auth.views.login', name='login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout', name='logout'),
    url(r'^profile/$', 'games.views.profile', name='profile'),
    url(r'^admin/', include(admin.site.urls)),
)
