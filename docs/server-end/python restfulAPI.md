---
title: python restfulAPI
tags:
  - Python
---

### 为何要用Python?

  最近公司大屏项目，之前用的node.js，数据量大了之后，还是有瓶颈的，并且js太灵活，没有好的代码风格控制，当然，还有其他的原因哈，就不一一介绍python了，去官网看就好。

### 让我们开始吧!
   
  #### [下载python](https://www.python.org/)
  #### [python基础](https://www.runoob.com/python3/python3-interpreter.html)
  #### [Django Rest framework](https://www.django-rest-framework.org/)

  1. #### 安装所需要的包
  ```
  pip3  install django
  pip3 install djangorestframework

  ```
  2. #### [用 Djiango创建项目](https://docs.djangoproject.com/en/3.0/)
  ```
  django-admin startproject djangoDemo
  <!-- 目录结构 -->
  djangoDemo/
  ├── djangoDemo  //项目最初的Python包
  │   ├── __init__.py  //一个空文件，声明所在目录的包为一个Python包
  │   ├── settings.py // 管理项目的配置信息
  │   ├── urls.py //声明请求url的映射关系
  │   └── wsgi.py //python程序和web服务器的通信协议
  └── manage.py // 一个命令行工具，用来和Django项目进行交互，如前面创建项目就用到了该文件
  ```
  3. #### 讲下 settings.py

 ```
import os

# 项目的相对路径，启动服务的时候会运行这个文件所在路径的manage.py
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 安全密钥
SECRET_KEY = 'l&!v_npes(!j82+x(44vt+h&#ag7io2x&shnf*9^8fv0d63!0r'

# 是否开启Debug
DEBUG = True

# 允许访问的主机ip，可以用通配符*
ALLOWED_HOSTS = []

# Application definition
# 用来注册App 前6个是django自带的应用
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages’,
    'django.contrib.staticfiles’,
]
# 中间件 ,需要加载的中间件。比如在请求前和响应后根据规则去执行某些代码的方法
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# 指定URL列表文件 父级URL配置
ROOT_URLCONF = 'djangoDemo.urls’

# 加载网页模板路径
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI的配置文件路径
WSGI_APPLICATION = 'djangoDemo.wsgi.application'

# 数据库配置 默认的数据库为sqlite
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# 相关密码验证
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
   {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# 语言设置 默认英语， 中文是zh-hans
LANGUAGE_CODE = 'en-us'

# 时区设置，中国的是：Asia/Shanghai
TIME_ZONE = 'UTC'

# i18n字符集是否支持
USE_I18N = True

USE_L10N = True

# 是否使用timezone
# 保证存储到数据库中的是 UTC 时间；
# 在函数之间传递时间参数时，确保时间已经转换成 UTC 时间；
USE_TZ = True

# 静态文件路径
STATIC_URL = '/static/'
 ```
 4. #### 创建模块
 ```
 创建一个名为app_demo的应用
	django-admin startapp app_demo

目录
├── app_demo
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── djangoDemo
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py

 ```
 5. #### app_demo目录结构
 ```
 app_demo目录结构

admin:对应应用后台管理配置文件

apps:对应应用的配置文件

models:数据模块，用于设计数据库等

tests:编写测试脚本

views：视图层，直接和浏览器进行交互

每次新建一个App我们需要将其在settings.py文件中的INSTALLED_APPS里进行注册，这样程序才能够找到这个服务

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app_demo', # 注册新创建的应用app
]

 ```
 6. #### 打开app_demo目录下的view.py，编写视图
 ```
from django.shortcuts import render
from django.http import HttpResponse

def hello(request):
    return HttpResponse('Hello World')

 ```
 7. #### 打开DjiangoDemo的urls.py
 ```
 映射URL
 主页的URL，它是用户用来访问项目的基础URL

from django.contrib import admin
from django.urls import path, include

urlpatterns = [    
	path('admin/', admin.site.urls),    
	path('', include('app_demo.urls')),
]
 ``` 
 8. #### 在文件夹app_demo中创建另一个urls.py文件
 ```
 from django.urls import path
from . import views

app_name='app_demo’
urlpatterns = [
	path('hello', views.hello, name=‘hello'),
]
 ```
 9. #### 执行如下命令来启动项目,大概一个项目就跑起来了
 ```
 python3 manage.py runserver  8000 
 ```
### 下面是一些正式开发需要注意的！
  
  #### 连接数据库，定义模型
    1.settings.py的MySQL连接信息，如下
     ``` 
      import pymysql
      pymysql.install_as_MySQLdb()

      DATABASES = {
          'default': {
              ‘ENGINE’: ‘django.db.backends.mysql’,  # 数据库引擎
              ‘NAME’: ‘test’,                          #  数据库名，事先要创建
              ‘USER’: ‘test’,		      #  用户名
              ‘PASSWORD’: ‘test123’,           #   密码
              ‘HOST’:‘localhost’,                   #   主机
              ‘PORT’:‘3306’,	                      #   数据库端口
          }
      }

     ```
    2.定义模型 model.py
     ```
    from django.db import models

    class Musician(models.Model):
          first_name = models.CharField(max_length=50)
          last_name = models.CharField(max_length=50)
          instrument = models.CharField(max_length=100)

    class Album(models.Model):
          artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
          name = models.CharField(max_length=100)
          release_date = models.DateField()
          num_stars = models.IntegerField()

    python3 manage.py makemigrations app_demo    # 生成迁移文件
    python3 manage.py migrate   # 执行迁移文件

     ``` 
  #### RESTful设计方法
    1.域名
     应该尽量将API部署在专用域名之下。
	   https://api.example.com
	   如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。
	   https://example.org/api/

    2.版本（Versioning）
    应该将API的版本号放入URL。
    http://www.example.com/api/1.0/foo
    http://www.example.com/api/1.1/foo
    http://www.example.com/api/2.0/foo

    另一种做法是，将版本号放在HTTP头信息中，但不如放入URL方便和直观。
    因为不同的版本，可以理解成同一种资源的不同表现形式，所以应该采用同一个URL。版本号可以在HTTP请求头信息的Accept字
    段中进行区分（参见Versioning REST Services）：
    Accept: vnd.example-com.foo+json; version=1.0

    Accept: vnd.example-com.foo+json; version=1.1

    Accept: vnd.example-com.foo+json; version=2.0

    3.路径
    路径又称"终点"（endpoint），表示API的具体网址，每个网址代表一种资源（resource）

    (1) 资源作为网址，只能有名词，不能有动词，而且所用的名词往往与数据库的表名对应。
    举例来说，以下是不好的例子:
      /getProducts 
      /listOrders 
      /retreiveClientByOrder?orderId=1

    对于一个简洁结构，你应该始终用名词。 此外，利用的HTTP方法可以分离网址中的资源名称的操作。

      GET /products ：将返回所有产品清单 
      POST /products ：将产品新建到集合 
      GET /products/4 ：将获取产品 4 
      PATCH（或）PUT /products/4 ：将更新产品 4

    (2) API中的名词应该使用复数。无论子资源或者所有资源。
    举例来说，获取产品的API可以这样定义
      获取单个产品：http://127.0.0.1:8080/AppName/rest/products/1 
      获取所有产品: http://127.0.0.1:8080/AppName/rest/products

   4. HTTP动词
     路径又称"终点"（endpoint），表示API的具体网址，每个网址代表一种资源（resource）

    (1) 资源作为网址，只能有名词，不能有动词，而且所用的名词往往与数据库的表名对应。
    举例来说，以下是不好的例子:
      /getProducts 
      /listOrders 
      /retreiveClientByOrder?orderId=1

    对于一个简洁结构，你应该始终用名词。 此外，利用的HTTP方法可以分离网址中的资源名称的操作。

      GET /products ：将返回所有产品清单 
      POST /products ：将产品新建到集合 
      GET /products/4 ：将获取产品 4 
      PATCH（或）PUT /products/4 ：将更新产品 4

    (2) API中的名词应该使用复数。无论子资源或者所有资源。
    举例来说，获取产品的API可以这样定义
      获取单个产品：http://127.0.0.1:8080/AppName/rest/products/1 
      获取所有产品: http://127.0.0.1:8080/AppName/rest/products

  5. 过滤信息（Filtering）
      如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。
      下面是一些常见的参数。
        ?limit=10：指定返回记录的数量
        ?offset=10：指定返回记录的开始位置。
        ?page=2&per_page=100：指定第几页，以及每页的记录数。
        ?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
        ?animal_type_id=1：指定筛选条件

  6. 状态码（Status Codes）
      服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）
        200 OK - [GET]：服务器成功返回用户请求的数据
        201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
        202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
        204 NO CONTENT - [DELETE]：用户删除数据成功。
        400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作
        401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
        403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
        404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
        406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
        410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
        422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
        500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。

  7. 错误处理（Error handling）
      如果状态码是4xx，服务器就应该向用户返回出错信息。一般来说，返回的信
      息中将error作为键名，出错信息作为键值即可。
        { 
            error: "Invalid API key“
        }

  8. 返回结果
    针对不同操作，服务器向用户返回的结果应该符合以下规范。
      GET /collection：返回资源对象的列表（数组）
      GET /collection/resource：返回单个资源对象
      POST /collection：返回新生成的资源对象
      PUT /collection/resource：返回完整的资源对象
      PATCH /collection/resource：返回完整的资源对象
      DELETE /collection/resource：返回一个空文档
  9. 超媒体（Hypermedia API）
      RESTful API最好做到Hypermedia（即返回结果中提供链接，连向其他API方法），使得用户不查文档，也知道
      下一步应该做什么。比如，Github的API就是这种设计，访问api.github.com会得到一个所有可用API的网址列表。
      { 
      "current_user_url": "https://api.github.com/user", 
      "authorizations_url": "https://api.github.com/authorizations",
      // ... 
      }

      从上面可以看到，如果想获取当前用户的信息，应该去访问api.github.com/user，然后就得到了下面结果。
      {
      "message": "Requires authentication", 
      "documentation_url": "https://developer.github.com/v3" 
      }
      上面代码表示，服务器给出了提示信息，以及文档的网址。

  10. 其他
      服务器返回的数据格式，应该尽量使用JSON，避免使用XML。







    










### [Django REST framework](https://www.django-rest-framework.org/)
  #### FBV 模式
    ```
      #url
      from django.contrib import admin
      from django.urls import path
      from app01 import views
       
      urlpatterns = [
          path('admin/', admin.site.urls),
          # 基于函数的视图
          path('user/',views.user)
      ]
      
      # view
      from django.shortcuts import render,HttpResponse
      import json
       
      # FBV 模式
      def user(request):
          '''
          如果有不同的方法 则要进行不同的判断
          '''
          if request.method == "GET":
              return HttpResponse("GET")
       
          if request.method == "POST":
              return HttpResponse("POST")
    ```

  #### CBV 模式(一般开发用这个模式)
  ```
    # url
    from django.contrib import admin
    from django.urls import path
    from app01 import views
     
    urlpatterns = [
        path('admin/', admin.site.urls),
         
        # CBV模式
        path('people',views.PeopleView.as_view())  # 后面的as_view()要记得写上
    ]
     
    # view
    '''
    CBV模式需要继承View
    当请求是get时候 自动执行get方法 
    当请求是post的时候 自动执行post方法
    '''
     
    from django.views import View
     
    # 所有CBV的都必须继承View
    class PeopleView(View):  # 一般喜欢在后面加个View
     
        def get(self,request,*args,**kwargs):
            return HttpResponse("GET")
     
        def post(self,request,*args,**kwargs):
            return HttpResponse("POST")

  ```