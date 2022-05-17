# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(email:'thecrow@gmail.com', password:123456, name:'Eric Draven', nickname:'movielover1', image:'https://sdl-stickershop.line.naver.jp/products/0/0/1/1361417/android/stickers/14287245.png;compress=true', phone:'8018889888')
u2 = User.create(email:'ilovehalloween@test.com', password:123456, name:'Michael Myers', nickname:'cold_blooded_killa', image:'https://pbs.twimg.com/profile_images/1466466892223234053/ihMBEiVB_400x400.jpg', phone:'801777777')
u3 = User.create(email:'ripley@test.com', password:123456, name:'Ellen Ripley', nickname:'alien_slayer', image:'https://i.guim.co.uk/img/media/ef051ec5cc2f1d6c0ff5f18ee7225b04e54fa18e/481_491_2408_1445/master/2408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=68022631661a93655ae2d1066fcf3c26', phone:'801777777')
u4 = User.create(email:'sherlocked@test.com', password:123456, name:'Sherlock Holmes', nickname:'sherlocked', image:'https://media.npr.org/assets/img/2018/06/02/sherlock-1-e20e4d122bb80306472eaf22e07a19969d6fc202-s1100-c50.jpg', phone:'801777777')
u5 = User.create(email:'007@test.com', password:123456, name:'James Bond', nickname:'007', image:'https://sdl-stickershop.line.naver.jp/products/0/0/1/1361417/android/stickers/14287238.png;compress=true', phone:'801777777')