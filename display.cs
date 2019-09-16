using System;

namespace display
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;

            while ((line = Console.ReadLine()) != null)
            {
                if (line == "end")
                {
                    Console.WriteLine(line);
                    return;
                }
                var display = BlankDisplay();

                for (int index = 0; index < line.Length; index++)
                {
                    char c = line[index];

                    if (c != ':')
                    {
                        switch (c)
                        {
                            case '0':
                                Zero(display, index);
                                break;
                            case '1':
                                One(display, index);
                                break;
                            case '2':
                                Two(display, index);
                                break;
                            case '3':
                                Three(display, index);
                                break;
                            case '4':
                                Four(display, index);
                                break;
                            case '5':
                                Five(display, index);
                                break;
                            case '6':
                                Six(display, index);
                                break;
                            case '7':
                                Seven(display, index);
                                break;
                            case '8':
                                Eight(display, index);
                                break;
                            case '9':
                                Nine(display, index);
                                break;
                            default:
                                break;
                        }
                    }
                }
                Print(display);
                Console.WriteLine();
                Console.WriteLine();
            }
        }

        static char[,] BlankDisplay()
        {
            char[,] display = new char[7, 29];
            for (int i = 0; i < display.GetLength(0); i++)
            {
                char chr = ' ';
                for (int j = 0; j < display.GetLength(1); j++)
                {
                    display[i, j] = chr;
                }
            }
            display[2,14] = 'o';
            display[4,14] = 'o';
            return display;
        }

        static void Print(char[,] display)
        {
            for (int i = 0; i < display.GetLength(0); i++)
            {
                string str = "";
                for (int j = 0; j < display.GetLength(1); j++)
                {
                    str += display[i, j];
                }
                Console.WriteLine(str);
            }
        }

        static void Horizontal(char[,] display, int index, int row)
        {
            int j = index * 7;
            int i = row * 3;

            if(index > 1)
            {
                j += -4;
            }

            display[i, j] = '+';
            display[i, j + 4] = '+';

            for (int k = j+1; k < j+4; k++)
            {
                display[i, k] = '-';
            }
        }

        static void VerticalLine(char[,] display, int index, int row, int col)
        {
            int j = index * 7 + col * 4;
            int i = row * 3;

            if (index > 1)
            {
                j += -4;
            }

            display[i, j] = '+';
            display[i + 3, j] = '+';

            for (int k = i+1; k < i+3; k++)
            {
                display[k, j] = '|';
            }
        }

        static void Zero(char[,] display, int index)
        {
            Horizontal(display, index, 0);
            Horizontal(display, index, 2);
            VerticalLine(display, index, 0, 0);
            VerticalLine(display, index, 1, 0);
            One(display, index);
        }

        static void One(char[,] display, int index)
        {
            VerticalLine(display, index, 0, 1);
            VerticalLine(display, index, 1, 1);
        }

        static void Two(char[,] display, int index)
        {
            Horizontal(display, index, 0);
            Horizontal(display, index, 1);
            Horizontal(display, index, 2);
            VerticalLine(display, index, 0, 1);
            VerticalLine(display, index, 1, 0);
        }

        static void Three(char[,] display, int index)
        {
            Horizontal(display, index, 0);
            Horizontal(display, index, 1);
            Horizontal(display, index, 2);
            One(display, index);
        }

        static void Four(char[,] display, int index)
        {
            Horizontal(display, index, 1);
            VerticalLine(display, index, 0, 0);
            One(display, index);
        }

        static void Five(char[,] display, int index)
        {
            Horizontal(display, index, 0);
            Horizontal(display, index, 1);
            Horizontal(display, index, 2);
            VerticalLine(display, index, 0, 0);
            VerticalLine(display, index, 1, 1);
        }

        static void Six(char[,] display, int index)
        {
            Horizontal(display, index, 0);
            Horizontal(display, index, 1);
            Horizontal(display, index, 2);
            VerticalLine(display, index, 0, 0);
            VerticalLine(display, index, 1, 0);
            VerticalLine(display, index, 1, 1);
        }

        static void Seven(char[,] display, int index)
        {
            Horizontal(display, index, 0);
            One(display, index);
        }

        static void Eight(char[,] display, int index)
        {
            Horizontal(display, index, 1);
            Zero(display, index);
        }

        static void Nine(char[,] display, int index)
        {
            Horizontal(display, index, 0);
            Horizontal(display, index, 1);
            Horizontal(display, index, 2);
            VerticalLine(display, index, 0, 0);
            One(display, index);
        }
    }
}
