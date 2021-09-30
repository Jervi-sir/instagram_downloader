import requests
import re           #regular expression


def get_response(url):
    r = requests.get(url)
    print(r)
    while r.status_code != 200:
        r = requests.get(url)
    return r.text

def prepare_urls(matches):
    return list({match.replace("\\u0026", "&") for match in matches})

url = input('Enter Instagram URL: ')
response = get_response(url)

vid_matches = re.findall('"video_url":"([^"]+)"', response)
pic_matches = re.findall('"display_url":"([^"]+)"', response)

vid_urls = prepare_urls(vid_matches)
pic_urls = prepare_urls(pic_matches)

if vid_urls:
    print(vid_urls)

if pic_urls:
    print(pic_urls)





