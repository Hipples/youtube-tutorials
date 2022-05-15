import sys, pygame
# compulsary command to initialize all pygame methods
pygame.init() 
# assigning screen size, ball speed, and background color variables
size = width, height = 649, 480
speed = [2, 2]
black = (000, 000, 000) # RGB codes for colors
# set display screen size
screen = pygame.display.set_mode(size)
# create ball from .gif image
ball = pygame.image.load('intro_ball.gif')
ballrect = ball.get_rect() # assign rectangular area to ball 
# 
while 1:
    for event in pygame.event.get():
        if event.type == pygame.QUIT: sys.exit()

    ballrect = ballrect.move(speed)
    if ballrect.left < 0 or ballrect.right > width:
        speed[0] = -speed[0]
    if ballrect.top < 0 or ballrect.bottom > height:
        speed[1] = -speed[1]

    screen.fill(black)
    screen.blit(ball, ballrect)
    pygame.display.flip()