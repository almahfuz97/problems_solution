//
//  task1.cpp
/*Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
    Ex:
    Input Case 1:
    input: [2,2,2,2,2]
    output:  5
 */
//
//  Created by Abdullah Al Mahfuz on 26/11/22.
//

#include <iostream>
#include <string>
#include <map>
#include <array>
#include <sstream>

using namespace std;

int main()
{
    int sampleArr[10000], n;
    cin >> n;
    map<float, int> aMap;
    int sum = 0;

    for (int i = 0; i < n; i++)
    {
        cin >> sampleArr[i];
        aMap.insert(pair<int, int>(sampleArr[i], 0));
        sum = sum + sampleArr[i];
    }
    //    only considering floor value of avg. as the task is to find the counts of int elements
    float avg = sum / (float)n;

    for (int i = 0; i < n; i++)
    {
        aMap[sampleArr[i]] = aMap[sampleArr[i]] + 1;
    }
    cout << aMap[avg] << endl;
    return 0;
}
