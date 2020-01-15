# Git

## Git 配置多个SSH key

### 1、**生成一个公司用的SSH-Key**

```
$ ssh-keygen -t rsa -C "usermail@company.com" -f ~/.ssh/id_rsa
```



### 2、生成一个github用的SSH-Key

```
$ ssh-keygen -t rsa -C "usermail@github.com" -f ~/.ssh/github_rsa
```



### 3、添加私钥

```
$ ssh-add ~/.ssh/id_rsa
$ ssh-add ~/.ssh/github_rsa
```

Tip:如果提示”Could not open a connection to your authentication agent”，执行

```
$ ssh-agent bash
```

再次运行 ssh-add 

**查看私钥列表**

```
$ ssh-add -l
```

**删除私钥列表**

```
$ ssh-add -D 
```

### 4、修改配置文件

在~/.ssh/目录下创建config文件（对，就是没有后缀）

```
$ touch config
```

在config文件中配置一下内容

```
# github
Host github.com
Port 22
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
User zhangsan

# gitlab_company
Host 144.20.80.215
HostName 144.20.80.215
PreferredAuthentications publickey
IdentityFile ~/.ssh/company_rsa
User zhangsan
```



然后就好了。。。



