CC = g++

all: prsteni.out
	cat sample.txt | ./prsteni.out

prsteni.out: prsteni.o
	$(CC) -o prsteni.out prsteni.cpp

prsteni.o: prsteni.cpp
	$(CC) -c prsteni.cpp

clean:
	rm prsteni.out prsteni.o