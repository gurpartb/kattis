CC = g++

all: pizza2.out
	cat sample.txt | ./pizza2.out

pizza2.out: pizza2.o
	$(CC) -o pizza2.out pizza2.cpp

pizza2.o: pizza2.cpp
	$(CC) -c pizza2.cpp

clean:
	rm pizza2.out pizza2.o