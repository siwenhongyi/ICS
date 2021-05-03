from django.db import models
import django.utils.timezone as timezone


# Create your models here.
class user(models.Model):
    """
    users id ,password and token
    """
    user_id = models.AutoField(primary_key=True)
    password = models.CharField(max_length=32, blank=False, null=False)
    token = models.CharField(max_length=36)

    def __str__(self):
        return self.token

    pass


class userProfile(models.Model):
    """
    user_id users profile
    """
    user_id = models.IntegerField(primary_key=True)
    bio = models.CharField(max_length=500, blank=True, null=True)
    avatar = models.TextField(max_length=500, default="https://i.postimg.cc/nh33qHZ5/0d6de2b8-s.jpg")
    email = models.EmailField(blank=True, null=True)
    nickname = models.CharField(max_length=200)
    qq = models.CharField(max_length=10, blank=True, null=True)
    weixin_code = models.ImageField(upload_to='userWeixinCode', default='default/userWeixinCode_default.png')
    created_at = models.DateTimeField(auto_now_add=True)
    last_login_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nickname

    pass


class iconLibs(models.Model):
    icon_libs_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500)
    all_count = models.IntegerField(default=0)
    created_user = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slugs = models.SlugField(max_length=500)
    likes_count = models.IntegerField(default=0)
    is_private = models.BooleanField(default=False)
    has_secret = models.IntegerField(default=0)
    password = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name

    pass


class data(models.Model):
    data_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500)
    data_type = models.CharField(max_length=500, default='icon')

    # for illustration
    data_file = models.ImageField(upload_to='illustration', blank=True, null=True)
    # they are svg 、 svg with style 、 svg's path and i dont know(small path?)
    origin_file = models.TextField(blank=True, null=True)
    svg = models.TextField(blank=True, null=True)
    show_svg = models.TextField(blank=True, null=True)
    prototype_svg = models.TextField(blank=True, null=True)

    category_id = models.IntegerField(blank=True, null=True)
    created_user = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    font_class = models.CharField(max_length=500, blank=True, null=True)
    height = models.IntegerField(default=1024, blank=True, null=True)
    width = models.IntegerField(default=1024, blank=True, null=True)
    is_private = models.BooleanField(default=False, blank=True, null=True)
    slug = models.SlugField(max_length=500)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    libs_belongs_to = models.ForeignKey(to=iconLibs, to_field='icon_libs_id', on_delete=models.CASCADE, blank=True,
                                        null=True)

    def __str__(self):
        return self.name


class favorites(models.Model):
    """
    map<user_id,data_id>
    """
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(to=user, to_field='user_id', on_delete=models.CASCADE)
    data_id = models.ForeignKey(to=data, to_field='data_id', on_delete=models.CASCADE)


class likes(models.Model):
    """
    map<user_id,libs_id>
    """
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(to=user, to_field='user_id', on_delete=models.CASCADE)
    libs_id = models.ForeignKey(to=iconLibs, to_field='icon_libs_id', on_delete=models.CASCADE)
