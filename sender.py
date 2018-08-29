
from pyfcm import FCMNotification

api_key = "AAAAswJN4pY:APA91bHzp0kI8gBgm8sgUtxrc6aISk3e8-PTH5y5I-Dg-Pa9KLRfcl6Rl4UxC0ajS-goV46eD7qGuVvJrwA67kLEk20UT0864aalTEjOGsGVIz9zhJppRxIFU3MHGAnlUy4KXxhSWicX"

push_service = FCMNotification(api_key=api_key)

# OR initialize with proxies

proxy_dict = {
          "http"  : "http://127.0.0.1",
          "https" : "http://127.0.0.1",
        }
push_service = FCMNotification(api_key=api_key, proxy_dict=proxy_dict)

# Your api-key can be gotten from:  https://console.firebase.google.com/project/<project-name>/settings/cloudmessaging

registration_id = "eCcwICGFLyM:APA91bEC-XPwUMGr3B5Ka8nczLqXL39D26kVAuSY8OElK03jgVbquoiFczrytJBHCnjjGihYR7nsHX8jJggnZ7I8tmixI1PP8yukKzj5fS7WIAHPRxZOj6lWGyOhdzv7X8SyYlKijkXd"
message_title = "Uber update"
message_body = "Hi john, your customized news for today is ready"
result = push_service.notify_single_device(registration_id=registration_id, message_title=message_title, message_body=message_body)

print(result)
 
# Send to multiple devices by passing a list of ids.
registration_ids = ["<device registration_id 1>", "<device registration_id 2>", ...]
message_title = "Uber update"
message_body = "Hope you're having fun this weekend, don't forget to check today's news"
result = push_service.notify_multiple_devices(registration_ids=registration_ids, message_title=message_title, message_body=message_body)

print(result)
