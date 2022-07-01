def three_thing(a, b, c):
    print('hi')


def send_email(to_email, from_email, subject, body):
    email = f"""
        to: {to_email}
        from: {from_email}
        subject {subject}
        ------------------
        body: {body}
    """
    print(email)


send_email(subject="MEOW", to_email="blue@gmail.com",
           from_email="aluu@me.com", body='hi blue, you are my cat. Love you')

# def greet(person):
#     return f'hello there, {person}'


# def divide(a, b):
#     if type(a) is int and type(b) is int:
#         return a / b
#     return 'a and b must be integers'

# colors = ['red', 'yellow', 'green']
# for color in colors:
#     print(color)

# for num in 'abcde':
#     print(num)

# for n in range(10):
#     print(n)
# num = 0

# while num <= 200:
#     print(num)
#     num = num + 10

# print('all done')

# guess = input('enter your guess')
# print(guess)

# target = 37
# guess = None
# while guess != target:
#     guess = input('please enter a guess...')
#     if guess == 'q' or guess == 'quit':
#         break
#     guess = int(guess)

# print('ALL DONE')
