//
//  FiberProjectDetail.swift
//  FiberFirst
//
//  Created by Nishka Narang on 2/10/24.
//

import SwiftUI

struct FiberProjectDetail: View {
    @Environment(ObjectData.self) var objectData
    var fiberProject: FiberProject
    
    var fiberProjectIndex: Int {
        objectData.fiberProjects.firstIndex(where: { $0.id == fiberProject.id })!
    }
    
    
    //time stuff
    var timer: Timer = Timer()
    var timerCounting: Bool = false
    /*
    func startStopTapped()
        {
            if(timerCounting)
            {
                timerCounting = false
                timer.invalidate()
            }
            else
            {
                timerCounting = true
                timer = Timer.scheduledTimer(timeInterval: 1, target: self, selector: #selector(timerCounter), userInfo: nil, repeats: true)
            }
        }
     */
    func makeTimeString(seconds: Int) -> String
        {
            var timeString = ""
            timeString += String(format: "%02d", (seconds / 3600))
            timeString += " : "
            timeString += String(format: "%02d", ((seconds % 3600) / 60))
            timeString += " : "
            timeString += String(format: "%02d", ((seconds % 3600) % 60))
            return timeString
        }
    
    var body: some View {
        @Bindable var objectData = objectData
        ZStack {
            Image("background")
                .resizable()
                .scaledToFill()
                .offset(y: -56)
                .ignoresSafeArea()
            VStack (alignment: .leading) {
                Spacer()
                    .frame(height:50)
                /*
                        Image("logo")
                            .resizable()
                            .scaledToFill()
                            .frame(width: 100, height: 50)
                 */
                        VStack (alignment: .center) {
                            Spacer()
                                .frame(height:50)
                            HStack{
                                Text(fiberProject.name)
                                    .font(.largeTitle)
                                FavoriteButton(isSet: $objectData.fiberProjects[fiberProjectIndex].isFavorite)
                            }
                            Spacer()
                                .frame(height:50)
                            Text("Timer")
                            Text(makeTimeString(seconds: objectData.fiberProjects[fiberProjectIndex].timerInSeconds))
                            HStack {
                                Button (action: {
                                    //startStopTapped()
                                }) {Image("playPause")
                                        .resizable()
                                        .scaledToFill()
                                        .frame(width: 50, height: 50)
                                }
                                /*
                                Button {
                                } label: {
                                    Text("Edit")
                                }
                                 */
                                
                            }
                            .padding(-30)
                            .offset(x: 5)
                            Spacer()
                                .frame(height:50)
                            HStack {
                                VStack{
                                    Text("Row")
                                    Text("\(fiberProject.numRows)")
                                    HStack {
                                        Button(action: {
                                            objectData.fiberProjects[fiberProjectIndex].numRows -= 1
                                        }) {
                                            Image("downArrow")
                                                .resizable()
                                                .scaledToFill()
                                                .frame(width: 50, height: 50)
                                        }
                                        Button(action: {
                                            objectData.fiberProjects[fiberProjectIndex].numRows += 1
                                            objectData.fiberProjects[fiberProjectIndex].numStitches = 0
                                        }) {
                                            Image("upArrow")
                                                .resizable()
                                                .scaledToFill()
                                                .frame(width: 50, height: 50)
                                        }
                                    }.padding(-10)
                                }
                                Spacer()
                                VStack{
                                    Text("Stitch")
                                    Text("\(fiberProject.numStitches)")
                                    HStack {
                                        Button(action: {
                                            objectData.fiberProjects[fiberProjectIndex].numStitches -= 1
                                        }) {
                                            Image("downArrow")
                                                .resizable()
                                                .scaledToFill()
                                                .frame(width: 50, height: 50)
                                        }
                                        Button(action: {
                                            objectData.fiberProjects[fiberProjectIndex].numStitches += 1
                                        }) {
                                            Image("upArrow")
                                                .resizable()
                                                .scaledToFill()
                                                .frame(width: 50, height: 50)
                                        }
                                    }.padding(-10)
                                }
                            }
                            .padding(20)
                        }
                        .padding()
                        Spacer()
                    }//vstack
                    .padding()
                //) //overlay
        } //Zstack
        .foregroundColor(Color.mauve)
        .font(.title)
        //.navigationTitle(fiberProject.name)
        //.navigationBarTitleDisplayMode(.inline)
        
        .background(
            
        )
         
    }
}

#Preview {
    let objectData = ObjectData()
    return FiberProjectDetail(fiberProject: objectData.fiberProjects[1])
        .environment(objectData)
}
