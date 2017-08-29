var data = [
  {
    stream: {
      mature: false,
      status:
        "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      broadcaster_language: "en",
      display_name: "FreeCodeCamp",
      game: "Creative",
      language: "en",
      _id: 79776140,
      name: "freecodecamp",
      created_at: "2015-01-14T03:36:47Z",
      updated_at: "2016-09-17T05:00:52Z",
      delay: null,
      logo:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      banner: null,
      video_banner:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      background: null,
      profile_banner:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      profile_banner_background_color: null,
      partner: false,
      url: "https://www.twitch.tv/freecodecamp",
      views: 161989,
      followers: 10048,
      _links: {
        self: "https://api.twitch.tv/kraken/channels/freecodecamp",
        follows: "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        commercial:
          "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        stream_key:
          "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        chat: "https://api.twitch.tv/kraken/chat/freecodecamp",
        subscriptions:
          "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        editors: "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        teams: "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        videos: "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    _links: {
      self: "https://api.twitch.tv/kraken/streams/freecodecamp",
      channel: "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    stream: null,
    display_name: "OgamingSC2",
    _links: {
      self: "https://api.twitch.tv/kraken/streams/ogamingsc2",
      channel: "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    stream: {
      mature: false,
      status:
        "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      broadcaster_language: "en",
      display_name: "ESL_SC2",
      game: "StarCraft II",
      language: "en",
      _id: 30220059,
      name: "esl_sc2",
      created_at: "2012-05-02T09:59:20Z",
      updated_at: "2016-09-17T06:02:57Z",
      delay: null,
      logo:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      banner: null,
      video_banner:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      background: null,
      profile_banner:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      profile_banner_background_color: "#050506",
      partner: true,
      url: "https://www.twitch.tv/esl_sc2",
      views: 60843789,
      followers: 135275,
      _links: {
        self: "https://api.twitch.tv/kraken/channels/esl_sc2",
        follows: "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        commercial: "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        stream_key: "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        chat: "https://api.twitch.tv/kraken/chat/esl_sc2",
        subscriptions:
          "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        editors: "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        teams: "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        videos: "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    _links: {
      self: "https://api.twitch.tv/kraken/streams/esl_sc2",
      channel: "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    stream: null,
    display_name: "noobs2ninjas",
    _links: {
      self: "https://api.twitch.tv/kraken/streams/esl_sc2",
      channel: "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    error: "Not Found",
    status: 404,
    message: "Channel 'not-a-valid-account' does not exist"
  }
];

$(document).ready(function() {
  allClick();

  $("#all").click(function() {
    allClick();
  });

  $("#online").click(function() {
    onlineClick();
  });

  $("#offline").click(function() {
    offlineClick();
  });
});

function allClick() {
  $("#name").empty();
  $("#name").append("<tr><th>Name</th><th>Streaming</th><th>Status</th></tr>");
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].stream != null) {
      $("#name").append(
        "<tr><td><img src ='" +
          data[i].stream.logo +
          "'/>" +
          " " +
          data[i].stream.display_name +
          "</td><td>" +
          "<a href ='" +
          data[i].stream.url +
          "' target = '_blank'>" +
          data[i].stream.status +
          "</a>" +
          "</td><td>Online</td></tr>"
      );
    } else {
      $("#name").append(
        "<tr><td><i class='fa fa-ban' style = 'color:#FE0A0F' aria-hidden='true'></i> " +
          data[i].display_name +
          "</td><td></td><td>Offline</td></tr>"
      );
    }
  }
}

function onlineClick() {
  $("#name").empty();
  $("#name").append("<tr><th>Name</th><th>Streaming</th><th>Status</th></tr>");
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].stream != null) {
      $("#name").append(
        "<tr><td><img src ='" +
          data[i].stream.logo +
          "'/>" +
          " " +
          data[i].stream.display_name +
          "</td><td>" +
          "<a href ='" +
          data[i].stream.url +
          "' target = '_blank'>" +
          data[i].stream.status +
          "</a>" +
          "</td><td>Online</td></tr>"
      );
    }
  }
}

function offlineClick() {
  $("#name").empty();
  $("#name").append("<tr><th>Name</th><th>Status</th></tr>");
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i].stream == null) {
      $("#name").append(
        "<tr><td><i class='fa fa-ban fa-2x' style = 'color:#FE0A0F' aria-hidden='true'></i> " +
          data[i].display_name +
          "</td><td>Offline</td></tr>"
      );
    }
  }
}

/*

console.log(data[0]);
console.log(data[0]._links.channel);
console.log(data[0]._links.self);
document.getElementById("name").innerHTML = (data[0].stream.display_name);
console.log(data[0].stream.display_name);
document.getElementById("logo").innerHTML = ('<img src = "' + data[0].stream.logo + '">');
document.getElementById("banner").innerHTML = ('<img src = "' + data[0].stream.profile_banner + '">');
document.getElementById("video-banner").innerHTML = ('<img src = "' + data[0].stream.video_banner + '">');
document.getElementById("streaming").innerHTML = "<a href ='"+data[0].stream.url +"' target = '_blank'>" + data[0].stream.status +"</a>";
console.log(data[0].stream.url);
console.log(data[1]);
console.log(data[1]._links.channel);
console.log(data[1]._links.self);

*/